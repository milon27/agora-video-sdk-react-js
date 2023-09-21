import { AgoraRTCProvider, useRTCClient } from "agora-rtc-react";
import AgoraRTC from "agora-rtc-sdk-ng";
import { useState } from "react";
import Try from "./Try";

export const App = () => {
  const [joined, setJoined] = useState(false);
  const client = useRTCClient(AgoraRTC.createClient({ codec: "vp8", mode: "rtc" }));

  return (
    <div>
      {joined === false ? (
        <div className="grid place-content-center min-h-screen">
          <button className="px-4 py-2 bg-green-400 text-white text-2xl" onClick={() => setJoined(true)}>
            Join
          </button>
        </div>
      ) : (
        <>
          <AgoraRTCProvider client={client}>
            <div className="flex flex-col items-center justify-center min-h-screen py-6">
              <button className="px-4 py-2 bg-red-400 text-white text-2xl" onClick={() => setJoined(false)}>
                Leave Call
              </button>
              <br></br>
              <Try />
            </div>
          </AgoraRTCProvider>
        </>
      )}
    </div>
  );
};

export default App;
