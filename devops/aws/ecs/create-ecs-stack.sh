#!/bin/bash
#
# @desc Create the Elastic Container Service Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecs-repo
STACKYAML=ecs.yaml

# @debug 
echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-ecs-stack.sh 
aws cloudformation create-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://ecs.params.json
