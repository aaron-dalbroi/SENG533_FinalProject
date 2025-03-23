# SENG533_FinalProject

How to run app.py

1. Install flask "pip install flask"
2. Navigate to directory with app.py
3. Run the command "flask --app app run"

## Pushing app to aws

### Setup aws cli

Install cli: https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html

Then run
`aws configure --profile seng533`

- it will ask for access keys, get this from logging onto aws account, then clicking on your account in top right corner, and then clicking security credentials. Find access keys, and create new access keys.
- Copy access key id and paste it into terminal
- then copy access key secret and paste it into terminal
- then set default region name to ca-central-1

### pushing to aws

Login to aws
`aws ecr get-login-password --region ca-central-1 | docker login --username AWS --password-stdin 872515295346.dkr.ecr.ca-central-1.amazonaws.com`

Build docker image
`docker build -t flask-app .`

Tag image
`docker tag flask-app:latest 872515295346.dkr.ecr.ca-central-1.amazonaws.com/flask-app:latest`

Push image to ECR
`docker push 872515295346.dkr.ecr.ca-central-1.amazonaws.com/flask-app:latest`

# Using terraform

Install terraform from https://developer.hashicorp.com/terraform/tutorials/aws-get-started/install-cli

Then `cd terraform`

set aws profile:
`set AWS_PROFILE=seng533`

Run `terraform init`

After you change anything in the main.tf file, run
`terraform apply`
and the changes you made will be applied to AWS
