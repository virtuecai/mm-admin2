mm-admin2
=========

AngularJs  playframework

lazy val mmAdmin2 = play.Project("mm-admin2", appVersion, Seq(
    "org.webjars" %% "webjars-play" % "2.2.1-2",
    "org.webjars" % "bootstrap" % "3.1.1",
    "org.webjars" % "font-awesome" % "4.0.3",
    "org.webjars" % "angularjs" % "1.2.16",
    "org.webjars" % "angular-ui-bootstrap" % "0.11.0",
    "org.webjars" % "angular-file-upload" % "1.3.1",
    "org.webjars" % "momentjs" % "2.7.0",
    "org.webjars" % "angular-moment" % "0.6.2-2",
    "org.webjars" % "ng-tags-input" % "2.0.1",
    "com.ee" %% "assets-loader" % "0.12.1"
  ), path = file("modules/mm-admin2")).dependsOn(mmCommon, mmModels).settings(
      resolvers += "ed eustace" at "http://edeustace.com/repository/releases"
    )