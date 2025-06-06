run notes

# build
docker build  --tag magic_mirror .

docker build --platform linux/arm/v7 --tag magic_mirror-arm7 .


# original
docker run  -d \
    --publish 80:8080 \
    --restart always \
    --volume ~/code/MagicMirror/config:/opt/magic_mirror/config \
    --volume ~/code/MagicMirror/modules:/opt/magic_mirror/modules \
    --volume /etc/localtime:/etc/localtime:ro \
    --name magic_mirror \
    bastilimbach/docker-magicmirror


# modified
docker run  -d \
    --publish 8888:8080 \
    --restart always \
    --volume /etc/localtime:/etc/localtime:ro \
    --name magic_mirror \
    magic_mirror-arm7


# transfer to server
docker save magic_mirror-arm7 | gzip > magic_mirror-arm7.tar.gz
scp magic_mirror-armv7.tar.gz user@your-server-ip:~/
gunzip -c magic_mirror-arm7.tar.gz | docker load

docker run  -d \
    --publish 8888:8080 \
    --restart always \
    --volume /etc/localtime:/etc/localtime:ro \
    magic_mirror

