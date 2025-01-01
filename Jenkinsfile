pipeline{
 agent any
 parameters{
  choice("name":"Environment","choices":["DEV","SIT","UAT"],"description":"Please provide environment")
  booleanParam("name":"Continue","description":"Enable to continue")
 }
 stages{
  stage("First Stage"){
   parallel{
    stage("First Parallel Stage"){
	 steps{
	  sh """
	   echo "First Parallel Stage Process"
	  """
	 }
	}
	stage("Second Parallel Stage"){
	 steps{
	  sh """
	   echo "Second Parallel Stage Process"
	  """
	 }
	}
   }
  }
  stage("Second Stage"){
   steps{
    sh """
	 echo "Second Stage Process"
	"""
   }
  }
  stage("Third Stage"){
   steps{
    sh """
	 echo "Third Stage Process"
	 echo ${env.BUILD_NUMBER}
	"""
   }
  }
 }
 post{
  always{
   slackSend(color: '#FFFF00', message: "BUILD ${env.BUILD_NUMBER}: Job ${env.JOB_NAME} ended. ${env.BUILD_URL} ")
  }
  success{
   echo "Build Creation Successful"
  }
  failure{
   echo "Build Creation Failed"
  }
  aborted{
   echo "Build Creation Aborted"
  }
 }
}
