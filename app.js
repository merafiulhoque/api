import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "GET request processed successfully"
    })
});

app.post("/post", async (req, res) => {
    const data = req.body
    res
    .cookie("token", "abcdef", {
        expires: Date.now() + 3600000
    })
    .json({
        success: true,
        message: "POST request processed successfully",
        data: data
    })
})

app.put("/put/:id", async (req, res) => {
    const {id} = req.params
    res.json({
        success: true,
        message: "PUT request processed successfully",
        data: id
    })
})

app.delete("/delete/:id", async (req, res) => {
    const {id} = req.params
    res.json({
        success: true,
        message: "DELETE request processed successfully",
        data: id
    })
})

app.patch("/patch/:id", async (req, res) => {
    const {id} = req.params
    res.json({
        success: true,
        message: "PATCH request processed successfully",
        data: id
    })
})

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});