# Passo a passo configurando um site

# Iniciando a rapberry:
Eu segui este tutorial: !()[https://elinux.org/RPi_Easy_SD_Card_Setup]

Com as instruções para linux.
Depois: 
* Ligar a RPI com um mouse, teclado e tela.
* Conectar numa rede wifi.
Comandos uteis:

* Descobrir o IP:
	```
	ifconfig
	```
	```
	hostname -I
	```
	Olhar nas configurações do seu roteador:
	No meu caso (http://192.168.1.1/)->DHPC-> Lista de clientes DHCP
	
Conectando por ssh:
* apt-get install openssh-server
* ssh -X pi@192.168.1.107
pi é o nome de usuario
192.168.1.107 é o ip da raspberry
```
-X      Enables X11 forwarding.  This can also be specified on a per-host basis
             in a configuration file.

             X11 forwarding should be enabled with caution.  Users with the ability
             to bypass file permissions on the remote host (for the user's X autho‐
             rization database) can access the local X11 display through the for‐
             warded connection.  An attacker may then be able to perform activities
             such as keystroke monitoring.

             For this reason, X11 forwarding is subjected to X11 SECURITY extension
             restrictions by default.  Please refer to the ssh -Y option and the
             ForwardX11Trusted directive in ssh_config(5) for more information.
```
* Sera pedido para aceitar as confiracoes do ssh, aceite
* A senha do usuario pi é: raspberry (por padrao)

Agora vc esta conecatado a rpi via ssh
Para acessar uma interface grafica:
* Instale o vinagre no seu pc: ``sudo apt-get install vinagre``
* Na rpi rode(talvez seja necessario instalar alguma coisa): ``tightvncserver```
sudo apt-get install tightvncserver
* Abra o vinagre, seleciona VNC e conect com o seu ip e o numero do tightvncserver. Exemplo 192.168.1.107:1
* Comando para ver a temperatura: ``vcgencmd measure_temp``

# Configurando o servidos com Apache

* Instalando: ``sudo apt-get install apache2``
* reiniciando: ``sudo /etc/init.d/ssh restart``
* Comando util: ``sudo /etc/init.d/apache2 restart``
* O apache coloca o arquivo em /var/www/html/index.html na sua rede local. acesse o IP com qlqr dispositivo conectado na rede e vc vera o index.html padrao do apache.

# Sei la
* Instalei o NO-IP: http://www.instructables.com/id/Ultimate-Pi-Based-Home-Server/
segui so a parte dele nesse tutorial
O capitulo de No-IP, ignorei todos os outros exceto esse
ta faltando o comando de desconpactar
``tar -zxvf nome_do_arquivo``
* Com o ifconfig eh possivel ver o default gateway e sabe como configurar o roteador
!()[print do ip fixo]

* SSH de qlqr pc: https://dev.to/zduey/how-to-set-up-an-ssh-server-on-a-home-computer






