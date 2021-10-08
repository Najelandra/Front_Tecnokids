
module.exports = {

    env: {
      HOST: 'https://www.tecnokids.com.co',
      get_user_info: '/moodle/login/indexws.php?methodcore=core_user_behavior&userid=',
      get_embedded_activity: '/moodle/mod/hvp/embed_tk.php?',
      get_activity_status: '/moodle/login/indexws.php?methodcore=core_activity_status&activityid=',
      post_save_image:'/moodle/img/proyects/index.php',
      get_save_image_db:'/moodle/login/indexws.php?methodcore=core_proyect_insert&userid=',
      get_courses:'/moodle/login/indexws.php?methodcore=core_course_users&userid=',
      get_activity_content:'/moodle/login/indexws.php?methodcore=core_activity_content',
      get_lessons:'/moodle/login/indexws.php?methodcore=core_course_lesson&courseid=',
      get_proyectsByUser:'/moodle/login/indexws.php?methodcore=core_proyect_user&userid=',
      get_all_proyects:'/moodle/login/indexws.php?methodcore=core_proyect_all',
      get_feedbacks:'/moodle/login/indexws.php?methodcore=core_feebacks_activty&activityid=',
      set_emoticon_user:'/moodle/login/indexws.php?methodcore=core_emoticon_user&userid=',
      get_all_insignias:'/moodle/login/indexws.php?methodcore=core_insignia_all',
      get_insignias_by_lesson:'/moodle/login/indexws.php?methodcore=core_insignia_detail&idlesson=',
      get_insignias_by_id:'/moodle/login/indexws.php?methodcore=core_insignia&idinsignia=',
      set_avatar:'/moodle/login/indexws.php?methodcore=core_update_avatar&userid=',
      logout:'/moodle/login/indexws.php?methodcore=core_logout',
      get_minimarco:'/moodle/login/indexws.php?methodcore=core_mini_marco&lessonid=',
      get_skills:'/moodle/login/indexws.php?methodcore=core_lesson_abilities&count_lesson=',
      set_like_by_user:'/moodle/login/indexws.php?methodcore=core_like_proyect&proyectid=',
      get_proyect_by_id:'/moodle/login/indexws.php?methodcore=core_proyect_id&userid='

    },
  }