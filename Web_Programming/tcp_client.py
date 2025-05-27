import socket
host = "192.168.107.56"
port = 7000
client=socket.socket()
client.connect((host,port))

msg = input("Enter msg: ")
while msg != 'bye':
    client.send(msg.encode())
    data = client.recv(1024).decode()
    
    print("Received from server: ",data)
    msg= input('Enter msg: ')
client.close()
