
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ArrowLeft, Code, Clock, Key, Database, AlertCircle, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const ApiDocs = () => {
  return (
    <Layout>
      {/* Header */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/knowledge-base/api-docs" className="inline-flex items-center text-xdeel-primary hover:text-xdeel-primary/80 mb-6">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to API & Technical Docs
          </Link>
          
          <div className="flex items-center mb-4">
            <Badge variant="outline" className="mr-4 text-purple-600 border-purple-300">
              <Code className="w-4 h-4 mr-2" />
              Technical
            </Badge>
            <div className="flex items-center text-xdeel-gray">
              <Clock className="w-4 h-4 mr-2" />
              30 min read
            </div>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            API Documentation
          </h1>
          <p className="text-xl text-xdeel-gray">
            Complete technical reference for developers integrating with Xdeel's trading platform
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Getting Started */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Getting Started</h2>
              <p className="text-xdeel-gray mb-6">
                The Xdeel API allows developers to integrate cryptocurrency trading functionality into their applications. 
                Our REST API provides endpoints for market data, order management, and account information.
              </p>
              
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">API Base URL</h4>
                <code className="text-blue-700 bg-blue-100 px-2 py-1 rounded text-sm">https://api.xdeel.com/v1</code>
              </div>
            </CardContent>
          </Card>

          {/* Authentication */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Key className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Authentication and API Keys</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Creating API Keys</h4>
                  <ol className="text-xdeel-gray space-y-2 ml-4">
                    <li>1. Log into your Xdeel account</li>
                    <li>2. Navigate to Account Settings → API Management</li>
                    <li>3. Click "Create New API Key"</li>
                    <li>4. Set permissions (read-only, trade, withdraw)</li>
                    <li>5. Save your API key and secret securely</li>
                  </ol>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Security Best Practices</h4>
                  <ul className="text-yellow-700 space-y-1 text-sm">
                    <li>• Never share your API secret key</li>
                    <li>• Use IP whitelisting when possible</li>
                    <li>• Set minimal required permissions</li>
                    <li>• Rotate keys regularly</li>
                    <li>• Monitor API usage in your dashboard</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Authentication Method</h4>
                  <p className="text-xdeel-gray mb-3">All API requests must include authentication headers:</p>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <div>X-API-Key: your_api_key</div>
                    <div>X-API-Signature: your_signature</div>
                    <div>X-API-Timestamp: timestamp</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Test Call */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Making Your First Test Call</h2>
              <p className="text-xdeel-gray mb-4">
                Test your API integration with a simple market data request:
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">GET /markets/ticker</h4>
                  <p className="text-xdeel-gray mb-3">Retrieve current market prices for all trading pairs.</p>
                  
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono mb-3">
                    <div>curl -X GET "https://api.xdeel.com/v1/markets/ticker" \</div>
                    <div>  -H "X-API-Key: your_api_key"</div>
                  </div>

                  <div>
                    <h5 className="font-semibold text-xdeel-dark mb-2">Example Response:</h5>
                    <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                      <pre>{`{
  "success": true,
  "data": [
    {
      "pair": "BTC-EUR",
      "last_price": "45250.00",
      "24h_change": "+2.5%",
      "24h_volume": "1250.75"
    }
  ]
}`}</pre>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Main Endpoints */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Database className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Main API Endpoints</h2>
              </div>

              <div className="space-y-6">
                {/* Market Data */}
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Market Data (Public)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-blue-600">GET /markets/ticker</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get current market prices</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-blue-600">GET /markets/orderbook/:pair</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get order book for specific pair</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-blue-600">GET /markets/trades/:pair</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get recent trades</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Account Info */}
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Account Information (Private)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-green-600">GET /account/balance</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get account balances</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-green-600">GET /account/orders</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get order history</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-green-600">GET /account/trades</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get trade history</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Trading */}
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Trading Operations (Private)</h4>
                  <div className="space-y-3">
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-orange-600">POST /orders/create</code>
                        <p className="text-xdeel-gray text-sm mt-1">Place a new order</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-red-600">DELETE /orders/:id</code>
                        <p className="text-xdeel-gray text-sm mt-1">Cancel an order</p>
                      </div>
                    </div>
                    <div className="flex items-start justify-between p-3 border rounded-lg">
                      <div>
                        <code className="text-sm font-mono text-blue-600">GET /orders/:id</code>
                        <p className="text-xdeel-gray text-sm mt-1">Get order status</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Handling */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertCircle className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Error Handling</h2>
              </div>

              <div className="space-y-4">
                <p className="text-xdeel-gray">
                  The API uses standard HTTP status codes to indicate success or failure of requests.
                </p>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Common Error Codes</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <code className="text-red-600 font-mono">400 Bad Request</code>
                      <span className="text-xdeel-gray text-sm">Invalid request parameters</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <code className="text-red-600 font-mono">401 Unauthorized</code>
                      <span className="text-xdeel-gray text-sm">Invalid API credentials</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <code className="text-red-600 font-mono">403 Forbidden</code>
                      <span className="text-xdeel-gray text-sm">Insufficient permissions</span>
                    </div>
                    <div className="flex items-center justify-between p-3 border rounded-lg">
                      <code className="text-red-600 font-mono">429 Too Many Requests</code>
                      <span className="text-xdeel-gray text-sm">Rate limit exceeded</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-2">Error Response Format</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <pre>{`{
  "success": false,
  "error": {
    "code": "INSUFFICIENT_BALANCE",
    "message": "Insufficient balance to place order"
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Rate Limits */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Rate Limits and Pagination</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Rate Limits</h4>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-blue-800">Public Endpoints</h5>
                      <p className="text-blue-700 text-sm">100 requests per minute</p>
                    </div>
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h5 className="font-semibold text-green-800">Private Endpoints</h5>
                      <p className="text-green-700 text-sm">60 requests per minute</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Pagination</h4>
                  <p className="text-xdeel-gray mb-3">
                    List endpoints support pagination using limit and offset parameters:
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <div>GET /account/orders?limit=50&offset=100</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          {/* Resources */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-xdeel-dark mb-4">Additional Resources</h3>
            <p className="text-xdeel-gray mb-6">
              Get started faster with our developer tools and examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-xdeel-primary hover:bg-xdeel-primary/90">
                <ExternalLink className="w-4 h-4 mr-2" />
                Postman Collection
              </Button>
              <Button variant="outline" size="lg">
                <ExternalLink className="w-4 h-4 mr-2" />
                GitHub Examples
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ApiDocs;
