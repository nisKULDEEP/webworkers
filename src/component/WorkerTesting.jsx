import { useEffect, useState } from "react";

const WorkerTesting = () => {
    const [worker, setWorker] = useState(null);
    const [status, setStatus] = useState('Idle');
  
    useEffect(() => {
      if (window.Worker) {
        const newWorker = new Worker(new URL('../helpers/worker.js', import.meta.url)); 
        setWorker(newWorker);
  
        newWorker.onmessage = (e) => {
          console.log('Message received from worker:', e.data);
          setStatus(e.data);
        };
  
        return () => {
          newWorker.terminate();
        };
      } else {
        console.log('Your browser doesn\'t support web workers.');
      }
    }, []);
  
    const handleClick = () => {
      if (worker) {
        worker.postMessage('Start');
        setStatus('Working...');
      }
    };
  
    return (
      <div>
        <button onClick={handleClick}>Start Worker</button>
        <p>Status: {status}</p>
      </div>
    );
}

export default WorkerTesting;