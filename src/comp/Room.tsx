import {
  RemoteVideoTrack,
  useCurrentUID,
  useLocalCameraTrack,
  useLocalMicrophoneTrack,
  usePublish,
  useRemoteUsers,
} from "agora-rtc-react";
import type { ReactNode } from "react";
import { LocalMicrophoneAndCameraUser } from "./LocalMicrophoneAndCameraUser";
import { IRemoteVideoTrack } from "agora-rtc-sdk-ng";

interface RoomProps {
  renderRemoteUsers: () => ReactNode;
  micOn: boolean;
  cameraOn: boolean;
}

export function RenderRemoteUsers({ videoTracks }: { videoTracks: IRemoteVideoTrack[] }) {
  return (
    <>
      {videoTracks.map((track: IRemoteVideoTrack) => (
        <div className="border w-64 h-64" key={track.getUserId()}>
          <RemoteVideoTrack track={track} play={true} />
          <label>{track.getUserId()}</label>
        </div>
      ))}
    </>
  );
}

export function Room({ micOn, cameraOn, renderRemoteUsers }: RoomProps) {
  const uid = useCurrentUID() || 0;

  const remoteUsers = useRemoteUsers();
  const publishedUsers = remoteUsers.filter((user) => user.hasAudio || user.hasVideo);

  const selfPublished = micOn || cameraOn;

  const { localMicrophoneTrack } = useLocalMicrophoneTrack(micOn);
  const { localCameraTrack } = useLocalCameraTrack(cameraOn);
  usePublish([localMicrophoneTrack, localCameraTrack]);

  return (
    <>
      <br />
      <p className="text-center">current user: {uid}</p>
      <p className="text-center">total user:{remoteUsers.length + 1}</p>
      <p className="text-center">published user: {publishedUsers.length + (selfPublished ? 1 : 0)}</p>
      <br />
      {/* grid here */}
      <div className="space-y-3">
        <p className="text-center text-lg">Remote User</p>
        <div className="flex flex-col md:flex-row gap-8">{renderRemoteUsers()}</div>
        <br />
        <br />
        <p className="text-center text-lg">Local User</p>
        <div>
          <LocalMicrophoneAndCameraUser
            audioTrack={localMicrophoneTrack}
            cameraOn={cameraOn}
            micOn={micOn}
            videoTrack={localCameraTrack}
          ></LocalMicrophoneAndCameraUser>
        </div>
      </div>
    </>
  );
}
