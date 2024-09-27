# pull the base image
FROM debian:bullseye

# update and upgrade the system
RUN apt-get update && apt-get upgrade -y

# install vsftpd
RUN apt-get install vsftpd -y

# Copy vsftpd configuration file
COPY conf/vsftpd.conf /etc/vsftpd/vsftpd.conf

COPY conf/vsftpd.conf /tmp/vsftpd.conf

RUN mkdir /var/run/vsftpd /var/run/vsftpd/empty

# Copy the startup script and ensure it has execution permission
COPY tools/server_ftp.sh /tmp/server_ftp.sh
RUN chmod +x /tmp/server_ftp.sh

# Expose FTP ports
EXPOSE 20 21

# Set entrypoint to start the FTP server
ENTRYPOINT ["sh", "/tmp/server_ftp.sh"]

