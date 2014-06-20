package yun.mm.admin.controllers.user

import play.api.db.DB
import play.api.libs.json.Reads._
import play.api.libs.json._
import play.api.mvc._
import views._
import yun.mm.models.{Connection, user}

import play.api.libs.json._
import play.api.libs.json.Reads._
import play.api.libs.functional.syntax._

import play.api.libs.concurrent.Execution.Implicits.defaultContext
import play.api.data.validation.ValidationError
import yun.mm.admin.controllers.Secured

/**
 * @author caizhengda
 * @version 0.1, 2014/06/13
 */
object Users extends Controller with  Secured {

  val logger = play.api.Logger("web2.1")

  implicit val UserWrites = new Writes[user.User] {
    def writes(o: user.User): JsValue = {
      Json.obj(
        "id" -> o.id.get,
        "name" -> o.name,
        "nicknameOpt" -> o.nicknameOpt
      )
    }
  }

}