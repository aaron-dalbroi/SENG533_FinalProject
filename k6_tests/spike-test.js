import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '10m', target: 300 },
        { duration: '1m', target: 300 },
        { duration: '10s', target: 1400 },
        { duration: '3m', target: 1400 },
        { duration: '10s', target: 1400 },
        { duration: '1m', target: 300 },
        { duration: '3m', target: 300 },
        { duration: '10s', target: 0}
    ]
};

export default function () {
    let res = http.get('http://flask-app-alb-672611154.ca-central-1.elb.amazonaws.com');
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}