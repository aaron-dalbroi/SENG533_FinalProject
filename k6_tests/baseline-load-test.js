import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    stages: [
        { duration: '20m', target: 500 },
    ]
};

export default function() {
    let res = http.get('http://flask-app-alb-672611154.ca-central-1.elb.amazonaws.com');
    check(res, { "status is 200": (res) => res.status === 200 });
    sleep(1);
}