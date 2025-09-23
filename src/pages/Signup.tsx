import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phone: "",
    userType: "",
    clubCard: "",
    aadhaar: ""
  });
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const userTypes = [
    { value: "athlete", label: "Athlete" },
    { value: "coach", label: "Coach" },
    { value: "administrator", label: "Sports Administrator" }
  ];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSendOtp = () => {
    if (!formData.phone) {
      toast({
        title: "Phone Required",
        description: "Please enter your phone number first",
        variant: "destructive",
      });
      return;
    }

    setShowOtp(true);
    toast({
      title: "OTP Sent",
      description: "Please check your mobile for verification code",
    });
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      toast({
        title: "Password Mismatch",
        description: "Passwords do not match",
        variant: "destructive",
      });
      return;
    }

    if (!agreeTerms) {
      toast({
        title: "Terms Required",
        description: "Please agree to terms and conditions",
        variant: "destructive",
      });
      return;
    }

    if (!otp) {
      toast({
        title: "OTP Required",
        description: "Please verify your phone number",
        variant: "destructive",
      });
      return;
    }

    // Mock signup success
    toast({
      title: "Account Created",
      description: "Welcome to SAI Sports Management!",
    });
    navigate("/");
  };

  const handleGoogleSignup = () => {
    toast({
      title: "Google Signup",
      description: "Google authentication would be integrated here",
    });
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-900 via-purple-900 to-pink-800">
      {/* Background effect */}
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
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)] px-4 py-8">
        <Card className="w-full max-w-2xl bg-white/10 backdrop-blur-md border-white/20 shadow-2xl">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold text-white mb-2">
              Create Account
            </CardTitle>
            <p className="text-white/80 text-sm">
              Already have an account? <Link to="/login" className="text-blue-300 hover:underline">Sign In</Link>
            </p>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleSignup} className="space-y-4">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName" className="text-white text-sm">First Name</Label>
                  <Input
                    id="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange("firstName", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Enter first name"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white text-sm">Last Name</Label>
                  <Input
                    id="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange("lastName", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Enter last name"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-white text-sm">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Phone and OTP */}
              <div className="space-y-2">
                <Label htmlFor="phone" className="text-white text-sm">Phone Number</Label>
                <div className="flex gap-2">
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60 flex-1"
                    placeholder="Enter phone number"
                    required
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={handleSendOtp}
                    className="bg-white/20 border-white/30 text-white hover:bg-white/30"
                  >
                    Send OTP
                  </Button>
                </div>
              </div>

              {showOtp && (
                <div className="space-y-2">
                  <Label htmlFor="otp" className="text-white text-sm">OTP Verification</Label>
                  <Input
                    id="otp"
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    required
                  />
                </div>
              )}

              {/* User Type Selection */}
              <div className="space-y-2">
                <Label htmlFor="userType" className="text-white text-sm">User Type</Label>
                <Select value={formData.userType} onValueChange={(value) => handleInputChange("userType", value)}>
                  <SelectTrigger className="bg-white/20 border-white/30 text-white">
                    <SelectValue placeholder="Select your role" />
                  </SelectTrigger>
                  <SelectContent>
                    {userTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Optional Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="aadhaar" className="text-white text-sm">Aadhaar Number (Optional)</Label>
                  <Input
                    id="aadhaar"
                    type="text"
                    value={formData.aadhaar}
                    onChange={(e) => handleInputChange("aadhaar", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="12-digit Aadhaar number"
                    maxLength={12}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="clubCard" className="text-white text-sm">Club Card (Optional)</Label>
                  <Input
                    id="clubCard"
                    type="text"
                    value={formData.clubCard}
                    onChange={(e) => handleInputChange("clubCard", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Club card number"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="password" className="text-white text-sm">Password</Label>
                  <Input
                    id="password"
                    type="password"
                    value={formData.password}
                    onChange={(e) => handleInputChange("password", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Create password"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-white text-sm">Confirm Password</Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange("confirmPassword", e.target.value)}
                    className="bg-white/20 border-white/30 text-white placeholder:text-white/60"
                    placeholder="Confirm password"
                    required
                  />
                </div>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="terms"
                  checked={agreeTerms}
                  onCheckedChange={(checked) => setAgreeTerms(checked as boolean)}
                  className="border-white/30 data-[state=checked]:bg-blue-600"
                />
                <Label htmlFor="terms" className="text-white text-sm">
                  I agree to the Terms of Service and Privacy Policy
                </Label>
              </div>

              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                Create Account
              </Button>
            </form>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-white/30" />
              </div>
              <div className="relative flex justify-center text-xs uppercase">
                <span className="bg-transparent px-2 text-white/80">or sign up with</span>
              </div>
            </div>

            <Button
              type="button"
              variant="outline"
              onClick={handleGoogleSignup}
              className="w-full bg-white/20 border-white/30 text-white hover:bg-white/30"
            >
              <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
                <path fill="#4285f4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34a853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#fbbc05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#ea4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              Continue with Google
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Signup;