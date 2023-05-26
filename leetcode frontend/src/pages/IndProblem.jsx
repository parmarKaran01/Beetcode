import { Button, Chip, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function IndProblem() {
  const [code, setCode] = useState("");
  const [problem, setProblem] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    console.log("This is the parameter value", pid);
    getProblem();
  }, []);

  const getProblem = async () => {
    try {
      const res = await fetch(`http://localhost:3000/problems/${pid}`, {
        method: "GET",
      });

      const data = await res.json();
      setProblem(data.problem);
    } catch (error) {
      console.log("This is the error in the problem", error);
    }
  };
  return (
    <div className="w-full h-full flex flex-row items-start bg-[#eceff1] ">
      <div className="flex flex-col gap-4 p-4 w-[50%]">
        <h3 className="text-2xl">{problem?.title}</h3>
        <div>
          <Chip
            label={problem?.difficulty}
            variant="outlined"
            style={{
              color: `${
                problem?.difficulty === "Hard"
                  ? "red"
                  : problem?.difficulty === "Medium"
                  ? "#d5b60a"
                  : "#006400"
              }`,
              borderColor: `${
                problem?.difficulty === "Hard"
                  ? "red"
                  : problem?.difficulty === "Medium"
                  ? "#d5b60a"
                  : "#006400"
              }`,
            }}
          />
        </div>
        <p className="">{problem?.description}</p>
        <code>Input : {problem?.exampleIn}</code>
        <code>Output : {problem?.exampleOut}</code>
      </div>
      <div className="w-[50%] p-4">
        <h3 className="text-2xl">Code Here</h3>
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-[550px] bg-slate-100 p-4"
        ></textarea>
        <div className="w-full flex flex-row items-center justify-end">
          <Button variant="contained" color="success">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
}
