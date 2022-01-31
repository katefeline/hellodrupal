# Hello Drupal [Local site URL](http://hellodrupal.docker.localhost/).
Step 1:
```
cd environments/
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
drush sql-dump > dump/dump.sql
```
Step 6:
```
drush cim -y
```
Step 7:
```
drush cr
```
