import { LocalAudioTrack, LocalVideoTrack } from "agora-rtc-react";
import type { ICameraVideoTrack, IMicrophoneAudioTrack } from "agora-rtc-sdk-ng";

export interface LocalMicrophoneAndCameraUserProps {
  /**
   * Whether to turn on the local user's microphone. Default false.
   */
  readonly micOn?: boolean;
  /**
   * Whether to turn on the local user's camera. Default false.
   */
  readonly cameraOn?: boolean;
  /**
   * A microphone audio track which can be created by `createMicrophoneAudioTrack()`.
   */
  readonly audioTrack?: IMicrophoneAudioTrack | null;
  /**
   * A camera video track which can be created by `createCameraVideoTrack()`.
   */
  readonly videoTrack?: ICameraVideoTrack | null;
}

/**
 * Play/Stop local user camera and microphone track.
 */

// audioTrack = { localMicrophoneTrack };
// cameraOn = { cameraOn };
// cover = { userAvatar };
// micOn = { micOn };
// videoTrack = { localCameraTrack };

export function LocalMicrophoneAndCameraUser({
  micOn,
  cameraOn,
  audioTrack,
  videoTrack,
}: LocalMicrophoneAndCameraUserProps) {
  const playVideo = !!cameraOn;

  return (
    <div className="border w-64 h-64 border-red-600">
      <LocalVideoTrack
        // deviceId={cameraDeviceId}
        disabled={!cameraOn}
        play={playVideo}
        track={videoTrack}
      />
      <LocalAudioTrack
        disabled={!micOn}
        play={false}
        track={audioTrack}
        // volume={volume}
      />
    </div>
  );
}
