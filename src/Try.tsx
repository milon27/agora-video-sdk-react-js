import { useJoin, useRemoteAudioTracks, useRemoteUsers, useRemoteVideoTracks } from "agora-rtc-react";
import { useState } from "react";
import { MediaControl } from "./comp/MediaControl";
import { RenderRemoteUsers, Room } from "./comp/Room";
import { AgoraConfig } from "./config/agora.config";

export default function Try() {
  const [cameraOn, setCameraOn] = useState(false);
  const [micOn, setMicOn] = useState(false);

  useJoin({
    appid: AgoraConfig.APP_ID,
    channel: AgoraConfig.channel,
    token: null,
  });

  const remoteUsers = useRemoteUsers();
  const { videoTracks } = useRemoteVideoTracks(remoteUsers);
  const { audioTracks } = useRemoteAudioTracks(remoteUsers);
  audioTracks.map((track) => track.play());

  return (
    <div>
      <Room
        cameraOn={cameraOn}
        micOn={micOn}
        renderRemoteUsers={() => <RenderRemoteUsers videoTracks={videoTracks} />}
      />
      <MediaControl
        cameraOn={cameraOn}
        micOn={micOn}
        setCamera={() => {
          setCameraOn((a) => !a);
        }}
        setMic={() => {
          setMicOn((a) => !a);
        }}
      />
    </div>
  );
}
