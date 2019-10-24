#!/bin/bash
#
# @desc Delete the loadbalancer Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=loadbalancer

echo "STACKNAME=$STACKNAME"

aws cloudformation delete-stack --stack-name $STACKNAME 
