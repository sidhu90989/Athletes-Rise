import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [aadhaar, setAadhaar] = useState("");
  const [clubCard, setClubCard] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [loginMethod, setLoginMethod] = useState<"credentials" | "kyc">("credentials");
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (loginMethod === "kyc" && !showOtp) {
      // Simulate OTP generation
      setShowOtp(true);
      toast({
        title: "OTP Sent",
        description: "Please check your mobile for verification code",
      });
      return;
    }

    if (showOtp && !otp) {
      toast({
        title: "OTP Required",
        description: "Please enter the verification code",
        variant: "destructive",
      });
      return;
    }

    // Mock login success
    toast({
      title: "Login Successful",
      description: "Welcome to SAI Sports Management",
    });
    navigate("/");
  };

  const handleGoogleLogin = () => {
    toast({
      title: "Google Login",
      description: "Google authentication would be integrated here",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
      {/* Background with mountain/forest scene effect */}
      <div className="absolute inset-0 opacity-70">
        <div className="absolute bottom-0 w-full h-48 bg-gradient-to-t from-orange-500/30 via-yellow-500/40 to-transparent"></div>
        <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-green-600/50 to-transparent"></div>
      </div>
      
      {/* Navigation */}
      <nav className="relative z-10 p-6">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white font-bold">SAI</span>
            </div>
            <span className="text-white font-semibold text-lg">Sports Analytics</span>
          </div>
          
          <div className="hidden md:flex space-x-8 text-white">
            <Link to="/" className="hover:text-blue-300 transition-colors">Home</Link>
            <span className="hover:text-blue-300 transition-colors cursor-pointer">Service</span>
            <span className="hover:text-blue-300 transition-colors cursor-pointer">Contact</span>
            <span className="hover:text-blue-300 transition-colors cursor-pointer">About</span>
          </div>

          <div className="flex items-center space-x-4">
            <div className="hidden md:flex bg-white/20 backdrop-blur-sm rounded-full px-4 py-2">
              <input 
                type="text" 
                placeholder="Search" 
                className="bg-transparent text-white placeholder-white/70 outline-none text-sm"
              />
            </div>
            <div className="w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
              <span className="text-white text-xs">👤</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4">
        <Card className="w-full max-w-md bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              {loginMethod === "credentials" ? "Sign In" : "KYC Login"}
            </CardTitle>
            <p className="text-white/80 text-sm">
              {loginMethod === "credentials" ? (
                <>Not a member? <Link to="/signup" className="text-blue-300 hover:underline">Sign Up</Link></>
              ) : (
                "Verify your identity to continue"
              )}
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <Tabs value={loginMethod} onValueChange={(value) => setLoginMethod(value as "credentials" | "kyc")}>
              <TabsList className="grid w-full grid-cols-2 bg-white/20">
                <TabsTrigger value="credentials" className="data-[state=active]:bg-white/20 text-white">
                  SAI Login
                </TabsTrigger>
                <TabsTrigger value="kyc" className="data-[state=active]:bg-white/20 text-white">
                  KYC Login
                </TabsTrigger>
              </TabsList>

              <TabsContent value="credentials" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-white text-sm">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Enter your email"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password" className="text-white text-sm">Password</Label>
                    <Input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Enter your password"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    Sign In
                  </Button>
                </form>
              </TabsContent>

              <TabsContent value="kyc" className="space-y-4">
                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="aadhaar" className="text-white text-sm">
                      Aadhaar Card Number
                    </Label>
                    <Input
                      id="aadhaar"
                      type="text"
                      value={aadhaar}
                      onChange={(e) => setAadhaar(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Enter 12-digit Aadhaar number"
                      maxLength={12}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="clubCard" className="text-white text-sm">
                      Club Card (Optional)
                      <Badge variant="secondary" className="ml-2 bg-green-600 text-white">
                        Fast Track
                      </Badge>
                    </Label>
                    <Input
                      id="clubCard"
                      type="text"
                      value={clubCard}
                      onChange={(e) => setClubCard(e.target.value)}
                      className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                      placeholder="Enter club card number"
                    />
                  </div>

                  {showOtp && (
                    <div className="space-y-2">
                      <Label htmlFor="otp" className="text-white text-sm">
                        OTP Verification
                      </Label>
                      <Input
                        id="otp"
                        type="text"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                        placeholder="Enter 6-digit OTP"
                        maxLength={6}
                      />
                    </div>
                  )}

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                  >
                    {showOtp ? "Verify & Login" : "Send OTP"}
                  </Button>
                </form>
              </TabsContent>
            </Tabs>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/30" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-white/80">or sign in with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleLogin}
              className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="currentColor"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="currentColor"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                />
                <path
                  fill="currentColor"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                />
              </svg>
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;