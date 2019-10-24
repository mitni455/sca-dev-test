#!/bin/bash
#
# @desc Create the LoadBa;ancer Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=loadbalancer
STACKYAML=loadbalancer.yaml

# @debug 
echo "STACKNAME=$STACKNAME"
echo "STACKYAML=$STACKYAML"

sh validate-loadbalancer-stack.sh 
aws cloudformation create-stack --stack-name $STACKNAME --template-body file://$STACKYAML --parameters file://loadbalancer.params.json
