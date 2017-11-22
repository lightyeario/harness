# coding: utf-8
import SimpleHTTPServer
import SocketServer
import cgi
PORT = 9000

def do_GET(self):
    print self.command, self.path
    print self.headers
    contentLength = self.headers.getheader('Content-Length')
    if contentLength:
    	print self.rfile.read(int(contentLength))
    self.send_response(200)
    # we need to set the Access-Control-Allow-Origin header so it can be called from the web-based testing harness
    self.send_header('Access-Control-Allow-Origin', '*')
    self.end_headers()
    print "---------------------------"

Handler = SimpleHTTPServer.SimpleHTTPRequestHandler
Handler.do_GET = do_GET
httpd = SocketServer.TCPServer(("", PORT), Handler)

print "Starting web server on port", PORT
print "---------------------------"

httpd.serve_forever()