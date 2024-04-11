import { Box, Stack } from "@chakra-ui/react";
import React from "react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://localhost:4002/api/getkey");

    const { data } = await axios.post("http://localhost:4002/api/checkout", {
      amount,
    });

    console.log(data);

    const options = {
      key: key,
      amount: data.amount,
      currency: "INR",
      name: "Sourav r sahoo",
      description: "Razor pay tut",
      image: "https://avatars.githubusercontent.com/u/90958544?v=4",
      order_id: data.id,
      callback_url: "http://localhost:4002/api/paymentverification",
      prefill: {
        name: "I am julu",
        email: "iamjulu@example.com",
        contact: "90322090000",
      },
      notes: {
        address: "Angul, jj",
      },
      theme: {
        color: "#1C1C1C",
      },
    };

    var razor = new window.Razorpay(options);
    razor.open();
  };

  return (
    <>
      <Box>
        <Stack direction={["column", "row"]}>
          <Card
            amount={5000}
            img={
              "https://images.unsplash.com/photo-1627822607447-d0008523a517?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHJjJTIwY2FyfGVufDB8fDB8fHww"
            }
            checkoutHandler={checkoutHandler}
          />

          <Card
            amount={6000}
            img={
              "https://images.unsplash.com/photo-1624902106166-5e8170eeaa2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJjJTIwY2FyfGVufDB8fDB8fHww"
            }
            checkoutHandler={checkoutHandler}
          />
          <Card
            amount={60}
            img={
              "https://images.unsplash.com/photo-1592853625511-ad0edcc69c07?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fG1hY2hpbmV8ZW58MHx8MHx8fDA%3D"
            }
            checkoutHandler={checkoutHandler}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Home;
