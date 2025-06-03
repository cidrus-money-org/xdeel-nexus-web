
import { Layout } from "@/components/Layout";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, Webhook, Shield, AlertTriangle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Webhooks = () => {
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
              <Webhook className="w-4 h-4 mr-2" />
              Integration
            </Badge>
          </div>
          
          <h1 className="text-4xl lg:text-5xl font-bold text-xdeel-dark mb-6">
            Webhook Integration
          </h1>
          <p className="text-xl text-xdeel-gray">
            Set up webhooks to receive real-time notifications about account activities and trading events
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* What are Webhooks */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">What are Webhooks?</h2>
              <p className="text-xdeel-gray mb-6">
                Webhooks are HTTP callbacks that Xdeel sends to your application when specific events occur. 
                Instead of constantly polling our API for updates, webhooks allow you to receive real-time 
                notifications about important events like completed trades, deposits, withdrawals, and more.
              </p>
              
              <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-3">Benefits of Using Webhooks</h4>
                <ul className="text-blue-700 space-y-2">
                  <li>• Real-time notifications without polling</li>
                  <li>• Reduced server load and API calls</li>
                  <li>• Immediate response to critical events</li>
                  <li>• Better user experience with instant updates</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Setting Up Webhooks */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Settings className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Setting Up Webhooks</h2>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Configuration Steps</h4>
                  <ol className="text-xdeel-gray space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">1.</span>
                      Log into your Xdeel account and navigate to Account Settings
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">2.</span>
                      Click on "Webhook Management" in the API section
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">3.</span>
                      Click "Add New Webhook" button
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">4.</span>
                      Enter your endpoint URL (must be HTTPS)
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">5.</span>
                      Select the events you want to receive
                    </li>
                    <li className="flex items-start">
                      <span className="font-semibold text-purple-600 mr-3">6.</span>
                      Save and test your webhook configuration
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Webhook Events */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Available Webhook Events</h2>
              <p className="text-xdeel-gray mb-6">
                Choose which events you want to receive notifications for:
              </p>

              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">Trading Events</h4>
                  <ul className="text-xdeel-gray text-sm space-y-1">
                    <li>• <code>order.created</code> - New order placed</li>
                    <li>• <code>order.filled</code> - Order completely filled</li>
                    <li>• <code>order.partially_filled</code> - Order partially filled</li>
                    <li>• <code>order.cancelled</code> - Order cancelled</li>
                    <li>• <code>trade.executed</code> - Trade executed</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">Account Events</h4>
                  <ul className="text-xdeel-gray text-sm space-y-1">
                    <li>• <code>deposit.completed</code> - Deposit confirmed</li>
                    <li>• <code>withdrawal.completed</code> - Withdrawal processed</li>
                    <li>• <code>withdrawal.requested</code> - Withdrawal initiated</li>
                    <li>• <code>balance.updated</code> - Account balance changed</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-xdeel-dark mb-2">Security Events</h4>
                  <ul className="text-xdeel-gray text-sm space-y-1">
                    <li>• <code>login.successful</code> - Account login</li>
                    <li>• <code>login.failed</code> - Failed login attempt</li>
                    <li>• <code>password.changed</code> - Password updated</li>
                    <li>• <code>2fa.enabled</code> - Two-factor authentication enabled</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Webhook Payload Format */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Webhook Payload Format</h2>
              <p className="text-xdeel-gray mb-6">
                All webhook payloads follow a consistent JSON format:
              </p>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Standard Payload Structure</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <pre>{`{
  "event": "order.filled",
  "timestamp": "2024-01-15T10:30:00Z",
  "user_id": "user_123456",
  "data": {
    "order_id": "order_789",
    "pair": "BTC-EUR",
    "side": "buy",
    "amount": "0.5",
    "price": "45250.00",
    "filled_amount": "0.5",
    "status": "filled"
  },
  "signature": "webhook_signature_here"
}`}</pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Example: Trade Executed Event</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <pre>{`{
  "event": "trade.executed",
  "timestamp": "2024-01-15T10:35:00Z",
  "user_id": "user_123456",
  "data": {
    "trade_id": "trade_456",
    "order_id": "order_789",
    "pair": "BTC-EUR",
    "side": "buy",
    "amount": "0.5",
    "price": "45250.00",
    "fee": "11.31",
    "fee_currency": "EUR"
  }
}`}</pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Security and Verification */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <Shield className="w-6 h-6 text-purple-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Security and Verification</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Webhook Signatures</h4>
                  <p className="text-xdeel-gray mb-3">
                    All webhooks include a signature header to verify authenticity:
                  </p>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <div>X-Webhook-Signature: sha256=signature_hash</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Signature Verification (Node.js)</h4>
                  <div className="bg-gray-900 p-4 rounded-lg text-green-400 text-sm font-mono">
                    <pre>{`const crypto = require('crypto');

function verifyWebhookSignature(payload, signature, secret) {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(payload)
    .digest('hex');
  
  return signature === \`sha256=\${expectedSignature}\`;
}`}</pre>
                  </div>
                </div>

                <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
                  <h4 className="font-semibold text-yellow-800 mb-3">🔒 Security Best Practices</h4>
                  <ul className="text-yellow-700 space-y-2">
                    <li>• Always verify webhook signatures</li>
                    <li>• Use HTTPS endpoints only</li>
                    <li>• Implement idempotency checks</li>
                    <li>• Set reasonable timeout values</li>
                    <li>• Log webhook events for debugging</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Error Handling */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <AlertTriangle className="w-6 h-6 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-xdeel-dark">Error Handling and Retries</h2>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Retry Policy</h4>
                  <p className="text-xdeel-gray mb-3">
                    If your endpoint doesn't respond with a 2xx status code, Xdeel will retry the webhook:
                  </p>
                  <ul className="text-xdeel-gray space-y-2 ml-4">
                    <li>• First retry: after 1 minute</li>
                    <li>• Second retry: after 5 minutes</li>
                    <li>• Third retry: after 15 minutes</li>
                    <li>• Fourth retry: after 1 hour</li>
                    <li>• Final retry: after 6 hours</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Handling Webhook Failures</h4>
                  <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                    <ul className="text-red-700 space-y-2">
                      <li>• Return HTTP 200 for successful processing</li>
                      <li>• Return HTTP 4xx for permanent failures</li>
                      <li>• Return HTTP 5xx for temporary failures (will retry)</li>
                      <li>• Process webhooks within 30 seconds</li>
                      <li>• Implement duplicate event handling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Testing */}
          <Card className="mb-8">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold text-xdeel-dark mb-4">Testing Your Webhooks</h2>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Test Webhook</h4>
                  <p className="text-xdeel-gray mb-3">
                    Use the webhook management dashboard to send test events to your endpoint:
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 text-sm">
                      💡 Tip: Use tools like ngrok or webhook.site for local development testing
                    </p>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-xdeel-dark mb-3">Monitoring Webhooks</h4>
                  <p className="text-xdeel-gray mb-3">
                    Monitor webhook delivery status in your account dashboard:
                  </p>
                  <ul className="text-xdeel-gray space-y-2 ml-4">
                    <li>• View delivery attempts and responses</li>
                    <li>• Check failure reasons and retry status</li>
                    <li>• Download webhook logs for debugging</li>
                    <li>• Set up alerts for failed deliveries</li>
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

export default Webhooks;
