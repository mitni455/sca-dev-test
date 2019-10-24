#!/bin/bash
#
# @desc Delete the ECR Stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecr-repo

echo "STACKNAME=$STACKNAME"

aws cloudformation delete-stack --stack-name $STACKNAME 
