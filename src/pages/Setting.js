import React from "react";

// todo 1. 自動儲存 2. ??改成下拉選單 3. 儲存資料庫
function Setting() {
  return (
    <div className="lg:w-2/5 md:w-4/5 sm:w-full mx-auto mt-16">
      <form action="#" method="POST">
        <div className="shadow overflow-hidden sm:rounded-md">
          <div className="px-4 py-5 bg-white sm:p-16">
            <div className="grid grid-cols-12">
              <div className="col-span-12 mb-10">
                <label
                  htmlFor="nickname"
                  className="block text-sm font-medium text-gray-700"
                >
                  暱稱
                </label>
                <input
                  type="text"
                  name="nickname"
                  id="nickname"
                  autoComplete="nickname"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>

              <div className="col-span-12 mb-10">
                <label
                  htmlFor="weekStart"
                  className="block text-sm font-medium text-gray-700"
                >
                  每周起始於
                </label>
                <select
                  id="weekStart"
                  name="weekStart"
                  autoComplete="weekStart-name"
                  className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                >
                  <option>星期日</option>
                  <option>星期一</option>
                </select>
              </div>

              <div className="col-span-12 mb-4">
                <p className="block text-sm font-medium text-gray-700">
                  通知設定
                </p>
              </div>

              <div className="col-span-1">
                <input
                  id="notification-focus"
                  name="notification-focus"
                  type="checkbox"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm col-span-11">
                <label
                  htmlFor="notification-focus"
                  className="font-medium text-gray-700"
                >
                  通知我進行中的任務。 每日??點
                </label>
              </div>

              <div className="col-span-1">
                <input
                  id="notification-deadline"
                  name="notification-deadline"
                  type="checkbox"
                  className="focus:ring-indigo-500 text-indigo-600 border-gray-300 rounded"
                />
              </div>
              <div className="ml-3 text-sm col-span-11">
                <label
                  htmlFor="notification-deadline"
                  className="font-medium text-gray-700"
                >
                  通知我任務deadline。 ??天前
                </label>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Setting;
