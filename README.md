# Hello Drupal [Local site URL](http://hellodrupal.docker.localhost/).
Step 1:
```
cd environments
```
Step 2:
```
make up
```
Step 3:
```
make shell
```
Step 4:
```
composer install
```
Step 5:
```
drush sql-cli < dump/dump.sql
```
Step 6:
```
drush cim -y
```
Step 7:
```
drush cr
```

#ДЗ
1 пермкнутися на гілку master (git checkout master)
2 оновити мастер (git pull origin master)
3 створити гілку дз з master (git checkout -b branch_name)
3 запушити гілку і створити мерж реквест в свою основну гілку (git pull origin branch_name)
