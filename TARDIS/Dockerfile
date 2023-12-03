FROM php:7.4-apache
COPY . /var/www/html/
RUN chmod 777 -R /var/www/html/
RUN apt-get update
RUN apt-get install -y libzip-dev
RUN docker-php-ext-install zip
RUN docker-php-ext-install pdo pdo_mysql
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/loca$
RUN composer require guzzlehttp/guzzle -W
RUN php artisan migrate
RUN php artisan db:seed
RUN a2enmod rewrite
RUN service apache2 restart
EXPOSE 80