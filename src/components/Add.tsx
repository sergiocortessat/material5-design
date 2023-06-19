import {
  Button,
  TextField,
  Tooltip,
  Fab,
  Box,
  Typography,
  Modal,
  Avatar,
  Stack,
  ButtonGroup,
} from "@mui/material";
import {
  Add as AddIcon,
  DateRange,
  EmojiEmotions,
  Image,
  PersonAdd,
  VideoCameraBack,
} from "@mui/icons-material";
import React, {useState} from "react";
import styled from "@emotion/styled";

const StyledModal = styled(Modal)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginBottom: "20px",
}));

const Add = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip
        title="Delete"
        sx={{
          position: "fixed",
          bottom: 20,
          left: { xs: "calc(50% - 25px)", md: 30 },
        }}
        onClick={() => setOpen(true)}
      >
        <Fab color="primary" aria-label="add">
          <AddIcon />
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={() => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          width={400}
          height={280}
          bgcolor={"background.default"}
          color={"text.primary"}
          p={3}
          borderRadius={5}
          sx={{width: { xs: "90%", md: "100%" }}}
        >
          <Typography variant="h6" color="gray" textAlign="center">
            Create Post
          </Typography>
          <UserBox>
            <Avatar
              sx={{ width: 30, height: 30 }}
              alt="John"
              src="../assets/3551739.jpg"
            />
            <Typography fontWeight={500} component={"span"}>
              John Doe
            </Typography>
          </UserBox>
          <TextField
            id="standard-multiline-static"
            multiline
            rows={3}
            placeholder="Whats on your mind?"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <Stack direction="row" gap={1} mt={2} mb={3}>
            <EmojiEmotions color="primary" />
            <Image color="secondary" />
            <VideoCameraBack color="success" />
            <PersonAdd color="error" />
          </Stack>
          <ButtonGroup
            fullWidth
            variant="contained"
            aria-label="outlined primary button group"
          >
            <Button startIcon={<AddIcon />}>Post</Button>
            <Button sx={{ width: "100px" }}>
              <DateRange />
            </Button>
          </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
