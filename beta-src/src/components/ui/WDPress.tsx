import * as React from "react";
import { Box, Stack, TextField } from "@mui/material";
import Device from "../../enums/Device";
import useViewport from "../../hooks/useViewport";
import getDevice from "../../utils/getDevice";
import WDButton from "./WDButton";
import { CountryTableData } from "../../interfaces";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import GameMessages, { GameMessage } from "../../state/interfaces/GameMessages";
import {
  fetchGameMessages,
  gameMessages,
  gameOverview,
} from "../../state/game/game-api-slice";

interface WDPressProps {
  children: React.ReactNode;
  userCountry: CountryTableData;
}

const WDPress: React.FC<WDPressProps> = function ({
  children,
  userCountry,
}): React.ReactElement {
  const [viewport] = useViewport();
  const device = getDevice(viewport);
  const mobileLandscapeLayout =
    device === Device.MOBILE_LANDSCAPE ||
    device === Device.MOBILE_LG_LANDSCAPE ||
    device === Device.MOBILE;
  const padding = mobileLandscapeLayout ? "0 6px" : "0 16px";
  const width = mobileLandscapeLayout ? 272 : 358;
  const spacing = mobileLandscapeLayout ? 1 : 2;

  const [userMsg, setUserMsg] = React.useState("");
  const [chatHistory, setChatHistory] = React.useState("");
  const [countrySelected, setCountrySelected] = React.useState(0);

  const { user, gameID } = useAppSelector(gameOverview);

  const messages = useAppSelector(gameMessages);
  const { members } = useAppSelector(gameOverview);
  const countries = members.map((member) => {
    return { country: member.country, countryID: member.countryID };
  });

  const sendUserMsg = () => {
    setUserMsg("");
    setChatHistory((curHistory) => `${curHistory}\n${userMsg}`);
    console.log("members");
    console.log(countries);
    console.log("messages");
    console.log(messages);
  };

  const updateCountryPane = (country) => {
    setCountrySelected(country);
    // const dispatch = useAppDispatch();
    // dispatch(
    //   fetchGameMessages({
    //     gameID: gameID as unknown as string,
    //     countryID: user.member.countryID as unknown as string,
    //     toCountryID: country.countryID as unknown as string,
    //     limit: "25",
    //   }),
    // );
  };

  const countryButtons = countries.map((country) => {
    return (
      <WDButton
        key={country.countryID}
        sx={{ p: 0 }}
        color={countrySelected === country.countryID ? "primary" : "secondary"}
        onClick={() => updateCountryPane(country)}
      >
        {country.country}
      </WDButton>
    );
  });

  const formatMsg = (msg: GameMessage) => `${msg.message}`;
  return (
    <Box>
      <Stack direction="row" spacing={spacing} alignItems="center">
        {countryButtons}
      </Stack>
      <Box sx={{ p: padding }}>
        <TextField
          id="chat-history"
          multiline
          rows={8}
          inputProps={{ readOnly: true }}
          value={messages.messages.map(formatMsg).join("\n")}
        />
      </Box>

      <Box
        sx={{
          m: "20px 0 10px 0",
          p: padding,
          width,
        }}
      >
        <TextField
          id="user-msg"
          label="Send Message"
          variant="outlined"
          value={userMsg}
          multiline
          maxRows={4}
          onChange={(text) => setUserMsg(text.target.value)}
        />
        <WDButton
          key={userMsg}
          sx={{ p: padding }}
          color="primary"
          disabled={!userMsg}
          onClick={sendUserMsg}
        >
          Send
        </WDButton>
      </Box>
    </Box>
  );
};

export default WDPress;
