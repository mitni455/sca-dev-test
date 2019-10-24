#!/bin/bash
#
# @desc Update the loadbalancer Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=loadbalancer
STACKYAML=loadbalancer.yaml

echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-loadbalancer-stack.sh 
aws cloudformation update-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://loadbalancer.params.json
