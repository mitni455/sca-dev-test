#!/bin/bash
#
# @desc Create the ECR Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecr-repo
STACKYAML=ecr.yaml

# @debug 
# echo "AWS_ACCESS_KEY_ID=$AWS_ACCESS_KEY_ID"
# echo "AWS_SECRET_ACCESS_KEY=$AWS_SECRET_ACCESS_KEY"
# echo "AWS_DEFAULT_REGION=$AWS_DEFAULT_REGION"
echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-ecr-stack.sh 
aws cloudformation create-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://ecr.params.json
