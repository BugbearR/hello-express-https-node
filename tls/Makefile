
.PHONY: all
all: server.key server.crt

.PHONY: clean
clean:
	-rm server.key server.crt

server.crt: server.key
	openssl req -new -x509 -days 3650 -key server.key -sha512 -out server.crt
	#openssl x509 -text -in server.crt -noout

server.key:
	openssl genpkey -algorithm RSA -pkeyopt rsa_keygen_bits:2048 -out server.key
	#openssl pkey -text -in server.key -noout

