using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace ng2Mvc5Demo.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }

	    public string Try1()
	    {
		    var dbMotionsHeaderKey = HttpContext.Request.Headers["DBMotions"];

			if (dbMotionsHeaderKey == null)
				throw new HttpException(400, "DbMotion header key is missing");

			var data = System.IO.File.ReadAllText(Server.MapPath(@"~/App_Data/dat.json"));
			
			return data;
	    }
		   
	  }
}