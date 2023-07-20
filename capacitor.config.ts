import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.example.app",
  appName: "gocart-v1",
  webDir: "out",
  server: {
    androidScheme: "https",
    url: "http://localhost:3000",
    cleartext: true,
  },
};

export default config;
