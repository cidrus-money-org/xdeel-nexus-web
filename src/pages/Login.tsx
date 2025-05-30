
import { Layout } from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Layout>
      <section className="py-24 bg-xdeel-purple min-h-screen flex items-center">
        <div className="max-w-md mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Card className="bg-white border-gray-200">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold text-xdeel-dark">
                Sign In to Xdeel
              </CardTitle>
              <p className="text-xdeel-gray">Welcome back! Please sign in to your account.</p>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="email" className="text-xdeel-dark">Email</Label>
                <Input id="email" type="email" placeholder="Enter your email" className="mt-1" />
              </div>
              <div>
                <Label htmlFor="password" className="text-xdeel-dark">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" className="mt-1" />
              </div>
              <Button className="w-full bg-xdeel-primary hover:bg-xdeel-primary-dark text-white">
                Sign In
              </Button>
              <div className="text-center">
                <p className="text-xdeel-gray">
                  Don't have an account?{" "}
                  <Link to="/signup" className="text-xdeel-primary hover:underline">
                    Sign up
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
