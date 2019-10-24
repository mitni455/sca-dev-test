#!/bin/bash
#
# @desc Update the ECR Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecr-repo
STACKYAML=ecr.yaml

echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-ecr-stack.sh 
aws cloudformation update-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://ecr.params.json
