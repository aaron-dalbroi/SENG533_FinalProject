import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '2m', target: 200 },
        { duration: '5m', target: 200 },
        { duration: '2m', target: 400 },
        { duration: '5m', target: 400 },
        { duration: '2m', target: 600 },
        { duration: '5m', target: 600 },
        { duration: '2m', target: 800 },
        { duration: '5m', target: 800 },
        { duration: '2m', target: 1000 },
        { duration: '5m', target: 1000 },
        { duration: '10m', target: 0 }
    ]
};

export default function() {
    let res = http.get('http://flask-app-alb-672611154.ca-central-1.elb.amazonaws.com');
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}
