import socket
host = socket.gethostname()
port = 6000
server = socket.socket(type=socket.SOCK_STREAM)
server.bind((host,port))
server.listen()
conn, addr = server.accept()
print("connection from ",str(addr))

while True:
    data=conn.recv(1024).decode()
    if data == 'bye':
        break
    print('from connected user ',data)
    data =  input("Enter Response: ")
    conn.send(data.encode())
conn.close()
