#!/bin/sh

if [ ! -f "/etc/vsftpd/vsftpd.conf.bak" ]; then

    mkdir -p /var/www/html

    if [ -f "/etc/vsftpd/vsftpd.conf" ]; then
        cp /etc/vsftpd/vsftpd.conf /etc/vsftpd/vsftpd.conf.bak
    else
        echo "/etc/vsftpd/vsftpd.conf not found!" >&2
        exit 1
    fi

    if [ -f "/tmp/vsftpd.conf" ]; then
        mv /tmp/vsftpd.conf /etc/vsftpd/vsftpd.conf
    else
        echo "/tmp/vsftpd.conf not found!" >&2
        exit 1
    fi

    useradd -m $FTP_USR
    echo "$FTP_USR:$FTP_PWD" | /usr/sbin/chpasswd &> /dev/null
    chown -R $FTP_USR:$FTP_USR /var/www/html

    echo $FTP_USR | tee -a /etc/vsftpd.userlist &> /dev/null

fi

echo "FTP started on :21"
/usr/sbin/vsftpd /etc/vsftpd/vsftpd.conf
