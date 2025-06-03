
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Key, Shield, AlertTriangle } from "lucide-react";
import { Link } from "react-router-dom";

const Authentication = () => {
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
              <Shield className="w-4 h-4 mr-2" />
              Security
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            API Authentication
          </h1>
          <p className="text-xl text-xdeel-gray">
            Learn how to securely authenticate with Xdeel's API using API keys and signatures
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* API Key Creation */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Key className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Creating API Keys</h2>
              </div>
              
              <p className="text-xdeel-gray mb-6">
                Before you can access Xdeel's API, you need to create API credentials in your account dashboard.
              </p>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Step-by-Step Guide</h4>
                  <ol className="text-xdeel-gray space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">1.</span>
                      Log into your Xdeel account and navigate to Account Settings
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">2.</span>
                      Click on "API Management" in the left sidebar
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">3.</span>
                      Click "Create New API Key" button
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">4.</span>
                      Choose appropriate permissions (read-only, trade, withdraw)
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">5.</span>
                      Set IP restrictions (recommended for production)
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">6.</span>
                      Save your API key and secret securely - you won't see the secret again
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Authentication Headers */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Required Headers</h2>
              <p className="text-xdeel-gray mb-6">
                All authenticated API requests must include the following headers:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">X-API-Key</h4>
                  <p className="text-xdeel-gray text-sm mb-2">Your public API key</p>
                  <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block">
                    X-API-Key: your_api_key_here
                  </code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">X-API-Signature</h4>
                  <p className="text-xdeel-gray text-sm mb-2">HMAC-SHA256 signature of the request</p>
                  <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block">
                    X-API-Signature: generated_signature
                  </code>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">X-API-Timestamp</h4>
                  <p className="text-xdeel-gray text-sm mb-2">Unix timestamp of the request</p>
                  <code className="text-sm bg-gray-900 text-green-400 p-2 rounded block">
                    X-API-Timestamp: 1640995200
                  </code>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Signature Generation */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Signature Generation</h2>
              <p className="text-xdeel-gray mb-6">
                The API signature is created using HMAC-SHA256 encryption with your API secret.
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Signature String Format</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <div>timestamp + method + path + body</div>
                  </div>
                  <p className="text-xdeel-gray text-sm mt-2">
                    Concatenate these values in order, then create HMAC-SHA256 hash using your API secret
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Example (JavaScript)</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <pre>{`const crypto = require('crypto');

const timestamp = Date.now().toString();
const method = 'GET';
const path = '/api/v1/account/balance';
const body = ''; // Empty for GET requests

const message = timestamp + method + path + body;
const signature = crypto
  .createHmac('sha256', apiSecret)
  .update(message)
  .digest('hex');`}</pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security Best Practices */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Security Best Practices</h2>
              </div>

              <div className="space-y-6">
                <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                  <h4 className="font-semibold text-red-800 mb-3">⚠️ Critical Security Guidelines</h4>
                  <ul className="text-red-700 space-y-2">
                    <li>• Never expose your API secret in client-side code</li>
                    <li>• Always use HTTPS for API requests</li>
                    <li>• Store API credentials securely (environment variables)</li>
                    <li>• Implement proper error handling for failed requests</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-3">🔒 Recommended Practices</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Use IP whitelisting in production environments</li>
                    <li>• Set minimal required permissions for each API key</li>
                    <li>• Rotate API keys regularly (monthly recommended)</li>
                    <li>• Monitor API usage and set up alerts for unusual activity</li>
                    <li>• Implement request timeouts and retry logic</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Authentication;
