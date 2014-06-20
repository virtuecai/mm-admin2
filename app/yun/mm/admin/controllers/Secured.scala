package yun.mm.admin.controllers

import play.api.mvc._
import play.api.libs.json._
import Json._

/**
 * @author caizhengda
 * @version 0.1, 4/16/13
 */
trait Secured {

  val SESSION_USER_ID = "userid"
  val COOKIE_USERNAME  = "username"
  val COOKIE_PASSWORD  = "password"

  /**
   * Action for authenticated users.
   */
  def isAuthenticated[A](bodyParser: BodyParser[A])(f: => Long => Request[A] => Result): EssentialAction = Security.Authenticated(
    req => req.session.get(SESSION_USER_ID),
    _ => Results.Unauthorized) (
    userId => Action(bodyParser)(request => f(userId.toLong)(request))
  )

  def isAuthenticated(f: => Long => Request[AnyContent] => Result): EssentialAction = isAuthenticated(BodyParsers.parse.anyContent)(f)

}
