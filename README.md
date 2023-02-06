# bull-bug-scripts

Steps to reproduce the bug


1. run index.js to add some jobs in test queue.
2. run worker.js to fail all jobs in queue, and stop it :).
3. run index.js to add some jobs in test queue.
4. run pause.js to pause queue.
5. run retry.js to retry jobs (expected send failed jobs to paused status, jobs go to waiting).
6. at this point you have jobs in waiting status, jobs in paused status and queue is in paused status.
7. run resume.js to resume the queue (jobs in waiting status stay on redis but they are stucked).