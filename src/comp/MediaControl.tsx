import { Camera, CameraOff, Mic, MicOff } from "lucide-react";

interface MediaControlProps {
  micOn?: boolean;
  cameraOn?: boolean;
  setMic?: () => void;
  setCamera?: () => void;
}

/* Camera and Microphone Controls */
export const MediaControl = ({ micOn, cameraOn, setMic, setCamera }: MediaControlProps) => (
  <>
    <div className="flex justify-center  items-center gap-3 px-6 py-3">
      {setMic && (
        <button className="border p-3 bg-gray-200 rounded-full" onClick={() => setMic()}>
          {micOn ? <Mic /> : <MicOff />}
        </button>
      )}
      {setCamera && (
        <button className="border p-3 bg-gray-200 rounded-full" onClick={() => setCamera()}>
          {cameraOn ? <Camera /> : <CameraOff />}
        </button>
      )}
    </div>
  </>
);
