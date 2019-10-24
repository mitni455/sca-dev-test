#!/bin/bash
#
# @desc Update the Elastic Container Service Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecs-repo
STACKYAML=ecs.yaml

echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-ecs-stack.sh 
aws cloudformation update-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://ecs.params.json
