#!/bin/bash
#
# @desc Delete the Elastic Container Service stack 
# @param {string} STACKNAME - Cloud Formation Stack Name 
# @param {string} STACKYAML - Cloud Formation Yaml 
# 
STACKNAME=ecs-repo

echo "STACKNAME=$STACKNAME"

aws cloudformation delete-stack --stack-name $STACKNAME 
