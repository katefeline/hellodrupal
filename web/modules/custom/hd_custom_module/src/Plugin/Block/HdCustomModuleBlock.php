<?php

namespace Drupal\hd_custom_module\Plugin\Block;

use Drupal\Core\Block\BlockBase;
use Drupal\Core\Form\FormStateInterface;

/**
 *
 * @Block(
 *   id = "hd_custom_module_block",
 *   admin_label = @Translation("HD custom module block"),
 *   category = @Translation("Custom"),
 * )
 */
class HdCustomModuleBlock extends BlockBase {

  /**
   * {@inheritdoc}
   */
  public function blockForm($form, FormStateInterface $form_state) {

    $form = parent::blockForm($form, $form_state);
    $config = $this->getConfiguration();
    $form['wrapper'] = [
      '#type' => 'fieldset',
      '#title' => $this
        ->t('Settings'),
    ];

    $form['wrapper']['bank_1'] = [
      '#type' => 'fieldset',
      '#title' => $this
        ->t('Bank'),
    ];
    $form['wrapper']['bank_1']['bank_name_1'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Bank name'),
      '#default_value' => $config['bank_name_1'] ?? '',
    ];
    $form['wrapper']['bank_1']['bank_percentage_1'] = [
      '#type' => 'number',
      '#min' => 0,
      '#step' => 0.01,
      '#title' => $this->t('%'),
      '#default_value' => $config['bank_percentage_1'] ?? '',
    ];
    $form['wrapper']['bank_1']['bank_months_1'] = [
      '#type' => 'number',
      '#min' => 0,
      '#step' => 0.01,
      '#title' => $this->t('Months'),
      '#default_value' => $config['bank_months_1'] ?? '',
    ];

    $form['wrapper']['bank_2'] = [
      '#type' => 'fieldset',
      '#title' => $this
        ->t('Bank'),
    ];
    $form['wrapper']['bank_2']['bank_name_2'] = [
      '#type' => 'textfield',
      '#title' => $this->t('Bank name'),
      '#default_value' => $config['bank_name_2'] ?? '',
    ];
    $form['wrapper']['bank_2']['bank_percentage_2'] = [
      '#type' => 'number',
      '#min' => 0,
      '#step' => 0.01,
      '#title' => $this->t('%'),
      '#default_value' => $config['bank_percentage_2'] ?? '',
    ];
    $form['wrapper']['bank_2']['bank_months_2'] = [
      '#type' => 'number',
      '#min' => 0,
      '#step' => 0.01,
      '#title' => $this->t('Months'),
      '#default_value' => $config['bank_months_2'] ?? '',
    ];

    return $form;
  }

  /**
   * {@inheritdoc}
   */
  public function blockSubmit($form, FormStateInterface $form_state) {
    parent::blockSubmit($form, $form_state);
    $values = $form_state->getValues();
    $this->configuration['bank_name_1'] = $values['wrapper']['bank_1']['bank_name_1'];
    $this->configuration['bank_percentage_1'] = $values['wrapper']['bank_1']['bank_percentage_1'];
    $this->configuration['bank_months_1'] = $values['wrapper']['bank_1']['bank_months_1'];

    $this->configuration['bank_name_2'] = $values['wrapper']['bank_2']['bank_name_2'];
    $this->configuration['bank_percentage_2'] = $values['wrapper']['bank_2']['bank_percentage_2'];
    $this->configuration['bank_months_2'] = $values['wrapper']['bank_2']['bank_months_2'];
  }

  /**
   * {@inheritdoc}
   */
  public function build() {
    return  [
      '#theme' => 'custom_block_template',
      '#attached' => [
        'library' =>  [
          'hd_custom_module/hd-custom-module-styling',
          'hd_custom_module/hd-custom-module-scripts',
        ],
        'drupalSettings' => [
          'hd_custom_module' => [
            'banks' => [
              1 => [
                'name' => $this->configuration['bank_name_1'],
                'percentage' => $this->configuration['bank_percentage_1'],
                'months' => $this->configuration['bank_months_1'],
              ],
              2 => [
                'name' => $this->configuration['bank_name_2'],
                'percentage' => $this->configuration['bank_percentage_2'],
                'months' => $this->configuration['bank_months_2'],
              ]
            ]
          ]
        ]
      ],
      '#banks' => [
        0 => [
          'name' => $this->configuration['bank_name_1'],
          'percentage' => $this->configuration['bank_percentage_1'],
          'months' => $this->configuration['bank_months_1'],
        ],
        1 => [
          'name' => $this->configuration['bank_name_2'],
          'percentage' => $this->configuration['bank_percentage_2'],
          'months' => $this->configuration['bank_months_2'],
        ]
      ]
    ];
  }

}
