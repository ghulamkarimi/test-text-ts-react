
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [text, setText] = useState("");
  const vorbildText = "React ist eine JavaScript-Bibliothek."

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);

  };
  const [milliseconds, setMilliseconds] = useState<number>(0);
  const [seconds, setSeconds] = useState<number>(0);
  const [minutes, setMinutes] = useState<number>(0);
  let interval: number;
  useEffect(() => {


    if (text !== "") {
      interval = setInterval(() => {
        setMilliseconds((prevMilliseconds) => prevMilliseconds + 100);
      }, 100);
    }

    return () => {

      clearInterval(interval);
    };
  }, [text]);

  useEffect(() => {
    if (milliseconds === 1000) {
      setMilliseconds(0);
      setSeconds((prevSeconds) => prevSeconds + 1);
    }
  }, [milliseconds]);

  useEffect(() => {
    if (seconds === 60) {
      setSeconds(0);
      setMinutes((prevMinutes) => prevMinutes + 1);
    }
  }, [seconds]);
  useEffect(() => {
    if (text === vorbildText) {
      clearInterval(interval)
    }

  }, [text])
  return (
    <div>

      <div>
        <p className="flex bg-slate-500 justify-center py-24 text-2xl text-white font-bold ">Test des Typetempos</p>
        <p className="flex bg-green-500 justify-center py-24 text-xl text-white text-center ">Der Prozess dee Typetempos wird so funktoiniert,dass mit dem Anfang des Schreibens,der wird mit dem Rechnen anfangen!!! und mit jeder Buchtabe von Nutzer/in die Richtigkeit des Schreibens wird dem/der anzeigen und überprüfen. </p>

        <div className="px-28 mt-4 flex flex-col  ">
        <p>Der Vorbild :</p>
          <div className='flex gap-2 mt-8 py-6 items-center'>
           

            <p className='text-2xl text-green-500'>{vorbildText}</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex px-28">
          <textarea
            value={text}
            onChange={handleTextAreaChange}
            className="border-4 border-slate-400 text-green-500 rounded-xl flex w-full outline-0 px-4"
            placeholder="Mit dem ersten Buchstaben fängt der Timer an."
          />
        </div>
        <p className="text-2xl text-center">
          {String(minutes).padStart(2, '0')}:
          {String(seconds).padStart(2, '0')}:
          {String(milliseconds).padStart(2, '0')}
        </p>
      </div>
    </div>
  )
}

export default App
