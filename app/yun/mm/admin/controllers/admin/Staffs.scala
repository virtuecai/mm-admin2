package yun.mm.admin.controllers.admin

import play.api.libs.json._
import play.api.mvc._
import views._

import yun.mm.admin.controllers.Secured
import yun.mm.models._
import yun.mm.models.admin

/**
 * @author caizhengda
 * @version 0.1, 2014/06/13
 */
object Staffs extends Controller with  Secured {

  val logger = play.api.Logger("mm-admin2")

  implicit val StaffWrites = new Writes[admin.Staff] {
    def writes(o: admin.Staff): JsValue = {
      Json.obj(
        "id" -> o.id.get,
        "name" -> o.name,
        "status" -> o.status,
        "imagePkgIdOpt" -> o.imagePkgIdOpt,
        "icon" -> o.imagePkgIdOpt.map(imagePkgId => resource.ImageItem.findByPkgAndType(imagePkgId, resource.ImageType.Icon).map(_.uri)),
        "descriptionOpt" -> o.descriptionOpt,
        "nickNameOpt" -> o.nickNameOpt,
        "userId" -> o.userId
      )
    }
  }

}