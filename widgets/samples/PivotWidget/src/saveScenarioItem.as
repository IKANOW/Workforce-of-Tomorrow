package
{
	[Bindable]public class saveScenarioItem
	{
		private var _name:String;
		private var _creator:String;
		private var _date:String;
		private var _description:String;
		private var _id:String;
		
		public function saveScenarioItem()
		{
		}
		
		public function get name():String
		{
			return _name;
		}
		
		public function set name(name:String):void
		{
			_name = name;
		}
		
		public function get creator():String
		{
			return _creator;
		}
		
		public function set creator(creator:String):void
		{
			_creator = creator;
		}
		
		public function get date():String
		{
			return _date;
		}
		public function set date(date:String):void
		{
			_date = date;
		}
		
		public function get description():String
		{
			return _description;
		}
		public function set description(description:String):void
		{
			_description = description;
		}
		
		public function get id():String
		{
			return _id;
		}
		public function set id(id:String):void
		{
			_id = id;
		}
		
	}
}